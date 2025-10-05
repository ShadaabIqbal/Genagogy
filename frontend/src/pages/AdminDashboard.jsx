import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { Filter, MoreVertical, Pencil, Trash2, RefreshCw } from "lucide-react";

const PAGE_SIZE = 10;

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [courseFilter, setCourseFilter] = useState("all");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);
  const [editing, setEditing] = useState(null); // record being edited

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (courseFilter !== "all") params.set("course", courseFilter);
      if (search) params.set("q", search);
      if (fromDate) params.set("from", fromDate);
      if (toDate) params.set("to", toDate);
      const res = await fetch(`/api/enrollments?${params.toString()}`);
      const data = await res.json();
      setEnrollments(Array.isArray(data) ? data : []);
    } catch (err) {
      toast({ title: "Failed to load", description: "Could not fetch enrollments", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  }

  async function deleteEnrollment(id) {
    try {
      const res = await fetch(`/api/enrollments/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error();
      setEnrollments(enrollments.filter((e) => e._id !== id));
      toast({ title: "Deleted", description: "Enrollment removed" });
    } catch {
      toast({ title: "Delete failed", description: "Could not delete enrollment", variant: "destructive" });
    }
  }

  async function updateEnrollment(id, updates) {
    try {
      const res = await fetch(`/api/enrollments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (!res.ok) throw new Error();
      const updated = await res.json();
      setEnrollments(enrollments.map((e) => (e._id === id ? updated : e)));
      toast({ title: "Updated", description: "Enrollment updated" });
      setEditing(null);
    } catch {
      toast({ title: "Update failed", description: "Could not update enrollment", variant: "destructive" });
    }
  }

  const filtered = useMemo(() => {
    return enrollments.filter((e) => {
      const matchesCourse = courseFilter === "all" || e.course === courseFilter;
      const matchesSearch = !search || [e.name, e.email, e.phone, e.course].some((v) => (v || "").toLowerCase().includes(search.toLowerCase()));
      const created = e.createdAt ? new Date(e.createdAt) : null;
      const matchesFrom = !fromDate || (created && created >= new Date(fromDate));
      const matchesTo = !toDate || (created && created <= new Date(toDate));
      return matchesCourse && matchesSearch && matchesFrom && matchesTo;
    });
  }, [enrollments, courseFilter, search, fromDate, toDate]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const uniqueCourses = useMemo(() => {
    return Array.from(new Set(enrollments.map((e) => e.course).filter(Boolean)));
  }, [enrollments]);

  return (
    <div className="min-h-screen bg-background">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground">Manage student enrollments</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => { localStorage.removeItem("staffLoggedIn"); localStorage.removeItem("staffUser"); navigate("/staff-login"); }}>Logout</Button>
            <Button onClick={fetchData} disabled={loading}>
              <RefreshCw className="h-4 w-4 mr-2" /> Refresh
            </Button>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="relative w-full">
                <Filter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input className="pl-9" placeholder="Search by name, email, phone, or course" value={search} onChange={(e) => { setSearch(e.target.value); setPage(1); }} />
              </div>
              <div className="grid sm:grid-cols-3 gap-3">
                <div>
                  <Label className="mb-1 block">Course</Label>
                  <Select value={courseFilter} onValueChange={(v) => { setCourseFilter(v); setPage(1); }}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      {uniqueCourses.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-1 block">From</Label>
                  <Input type="date" value={fromDate} onChange={(e) => { setFromDate(e.target.value); setPage(1); }} />
                </div>
                <div>
                  <Label className="mb-1 block">To</Label>
                  <Input type="date" value={toDate} onChange={(e) => { setToDate(e.target.value); setPage(1); }} />
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => { setSearch(""); setCourseFilter("all"); setFromDate(""); setToDate(""); setPage(1); }}>Clear</Button>
                <Button onClick={fetchData} disabled={loading}><RefreshCw className="h-4 w-4 mr-2" /> Apply</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Enrollments ({filtered.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Course</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pageData.map((e) => (
                    <TableRow key={e._id}>
                      <TableCell className="font-medium">
                        {editing?.id === e._id ? (
                          <Input defaultValue={e.name} onChange={(ev) => setEditing({ ...editing, name: ev.target.value })} />
                        ) : (
                          e.name
                        )}
                      </TableCell>
                      <TableCell>
                        {editing?.id === e._id ? (
                          <Input defaultValue={e.email} onChange={(ev) => setEditing({ ...editing, email: ev.target.value })} />
                        ) : (
                          e.email
                        )}
                      </TableCell>
                      <TableCell>
                        {editing?.id === e._id ? (
                          <Input defaultValue={e.phone} onChange={(ev) => setEditing({ ...editing, phone: ev.target.value })} />
                        ) : (
                          e.phone
                        )}
                      </TableCell>
                      <TableCell>
                        {editing?.id === e._id ? (
                          <Input defaultValue={e.course} onChange={(ev) => setEditing({ ...editing, course: ev.target.value })} />
                        ) : (
                          <Badge variant="secondary">{e.course}</Badge>
                        )}
                      </TableCell>
                      <TableCell>{e.createdAt ? new Date(e.createdAt).toLocaleDateString() : "-"}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {editing?.id === e._id ? (
                              <>
                                <DropdownMenuItem onClick={() => updateEnrollment(e._id, { name: editing.name ?? e.name, email: editing.email ?? e.email, phone: editing.phone ?? e.phone, course: editing.course ?? e.course })}>
                                  Save
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => setEditing(null)}>
                                  Cancel
                                </DropdownMenuItem>
                              </>
                            ) : (
                              <>
                                <DropdownMenuItem onClick={() => setEditing({ id: e._id })}>
                                  <Pencil className="mr-2 h-4 w-4" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-red-600" onClick={() => deleteEnrollment(e._id)}>
                                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-muted-foreground">Page {page} of {totalPages}</div>
              <div className="flex gap-2">
                <Button variant="outline" disabled={page <= 1} onClick={() => setPage((p) => Math.max(1, p - 1))}>Previous</Button>
                <Button variant="outline" disabled={page >= totalPages} onClick={() => setPage((p) => Math.min(totalPages, p + 1))}>Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;


