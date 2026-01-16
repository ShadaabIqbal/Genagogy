import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Users, 
  UserPlus, 
  Calendar, 
  ClipboardList, 
  LogOut, 
  Search,
  Filter,
  MoreVertical,
  Edit,
  Trash2,
  Check,
  X,
  UserCheck,
  DollarSign,
  Clock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState(null);
  
  // Staff data
  const [staffMembers, setStaffMembers] = useState([
    {
      id: 1,
      name: "John Anderson",
      email: "john.anderson@technoglobe.com",
      phone: "+1 (555) 111-2233",
      role: "admin",
      department: "Administration",
      joiningDate: "2023-01-15",
      salary: 5000,
      attendance: []
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah.williams@technoglobe.com", 
      phone: "+1 (555) 222-3344",
      role: "instructor",
      department: "Web Development",
      joiningDate: "2023-03-20",
      salary: 4500,
      attendance: []
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@technoglobe.com",
      phone: "+1 (555) 333-4455",
      role: "instructor", 
      department: "Data Science",
      joiningDate: "2023-02-10",
      salary: 4800,
      attendance: []
    }
  ]);

  const [salaryRecords, setSalaryRecords] = useState([
    {
      id: 1,
      staffId: 2,
      month: "2024-01",
      amount: 4500,
      status: "Paid",
      transactionDate: "2024-01-31",
      remarks: "January salary - Full month"
    },
    {
      id: 2,
      staffId: 2,
      month: "2024-02", 
      amount: 4500,
      status: "Paid",
      transactionDate: "2024-02-29",
      remarks: "February salary - Full month"
    },
    {
      id: 3,
      staffId: 3,
      month: "2024-01",
      amount: 4800,
      status: "Paid", 
      transactionDate: "2024-01-31",
      remarks: "January salary - Full month"
    },
    {
      id: 4,
      staffId: 2,
      month: "2024-03",
      amount: 4500,
      status: "Pending",
      transactionDate: null,
      remarks: "March salary"
    }
  ]);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      phone: "+1 (555) 123-4567",
      course: "Full Stack Web Development",
      enrollmentDate: "2024-01-15",
      status: "Active",
      attendance: 85
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@email.com",
      phone: "+1 (555) 234-5678",
      course: "Data Science & Analytics",
      enrollmentDate: "2024-01-20",
      status: "Active",
      attendance: 92
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol.davis@email.com",
      phone: "+1 (555) 345-6789",
      course: "Digital Marketing Mastery",
      enrollmentDate: "2024-02-01",
      status: "Completed",
      attendance: 98
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@email.com",
      phone: "+1 (555) 456-7890",
      course: "UI/UX Design Professional",
      enrollmentDate: "2024-01-10",
      status: "Active",
      attendance: 78
    }
  ]);

  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedStaffForAttendance, setSelectedStaffForAttendance] = useState(null);
  const [newSalaryRecord, setNewSalaryRecord] = useState({
    staffId: "",
    month: "",
    amount: "",
    remarks: ""
  });

  useEffect(() => {
    const staffLoggedIn = localStorage.getItem("staffLoggedIn");
    const staffUser = localStorage.getItem("staffUser");
    
    if (!staffLoggedIn || !staffUser) {
      navigate("/staff-login");
      return;
    }
    
    setUser(JSON.parse(staffUser));
  }, [navigate]);

  // Removed backend enrollment fetching; staff dashboard manages local-only demo data

  const handleLogout = () => {
    localStorage.removeItem("staffLoggedIn");
    localStorage.removeItem("staffUser");
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
    navigate("/staff-login");
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newId = Math.max(...students.map(s => s.id)) + 1;
    const student = {
      ...newStudent,
      id: newId,
      enrollmentDate: new Date().toISOString().split('T')[0],
      status: "Active",
      attendance: 0
    };
    setStudents([...students, student]);
    setNewStudent({ name: "", email: "", phone: "", course: "" });
    toast({ title: "Student Added", description: `${student.name} has been successfully enrolled.` });
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(s => s.id !== id));
    toast({ title: "Student Removed", description: "Student has been removed from the system." });
  };

  const markAttendance = (id, present) => {
    setStudents(students.map(s => 
      s.id === id 
        ? { ...s, attendance: present ? Math.min(s.attendance + 5, 100) : Math.max(s.attendance - 2, 0) }
        : s
    ));
    
    toast({
      title: "Attendance Updated",
      description: `Attendance has been ${present ? 'marked' : 'updated'}.`,
    });
  };

  const markStaffAttendance = (staffId, status) => {
    const today = new Date().toISOString().split('T')[0];
    setStaffMembers(staffMembers.map(staff => {
      if (staff.id === staffId) {
        const updatedAttendance = [...staff.attendance];
        const existingIndex = updatedAttendance.findIndex(a => a.date === today);
        
        if (existingIndex >= 0) {
          updatedAttendance[existingIndex].status = status;
        } else {
          updatedAttendance.push({ date: today, status });
        }
        
        return { ...staff, attendance: updatedAttendance };
      }
      return staff;
    }));

    toast({
      title: "Staff Attendance Marked",
      description: `Attendance marked as ${status}.`,
    });
  };

  const addSalaryRecord = (e) => {
    e.preventDefault();
    if (!newSalaryRecord.staffId || !newSalaryRecord.month || !newSalaryRecord.amount) return;

    const newRecord = {
      id: Math.max(...salaryRecords.map(s => s.id), 0) + 1,
      staffId: parseInt(newSalaryRecord.staffId),
      month: newSalaryRecord.month,
      amount: parseFloat(newSalaryRecord.amount),
      status: "Paid",
      transactionDate: new Date().toISOString().split('T')[0],
      remarks: newSalaryRecord.remarks || "Salary payment"
    };

    setSalaryRecords([...salaryRecords, newRecord]);
    setNewSalaryRecord({ staffId: "", month: "", amount: "", remarks: "" });

    toast({
      title: "Salary Record Added",
      description: "Salary payment has been recorded successfully.",
    });
  };

  const toggleSalaryStatus = (recordId) => {
    setSalaryRecords(salaryRecords.map(record => {
      if (record.id === recordId) {
        return {
          ...record,
          status: record.status === "Paid" ? "Pending" : "Paid",
          transactionDate: record.status === "Pending" ? new Date().toISOString().split('T')[0] : record.transactionDate
        };
      }
      return record;
    }));

    toast({
      title: "Salary Status Updated",
      description: "Payment status has been updated.",
    });
  };

  const getStaffAttendancePercentage = (staffId) => {
    const staff = staffMembers.find(s => s.id === staffId);
    if (!staff || staff.attendance.length === 0) return 0;
    
    const presentDays = staff.attendance.filter(a => a.status === "Present").length;
    return Math.round((presentDays / staff.attendance.length) * 100);
  };

  const getMyAttendance = () => {
    if (!user) return [];
    const staff = staffMembers.find(s => s.email === user.email);
    return staff ? staff.attendance : [];
  };

  const getMySalaryRecords = () => {
    if (!user) return [];
    const staff = staffMembers.find(s => s.email === user.email);
    return staff ? salaryRecords.filter(r => r.staffId === staff.id) : [];
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.course.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || student.status.toLowerCase() === filterStatus.toLowerCase();
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "active": return "bg-green-100 text-green-800";
      case "completed": return "bg-blue-100 text-blue-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getAttendanceColor = (attendance) => {
    if (attendance >= 90) return "text-green-600";
    if (attendance >= 75) return "text-yellow-600";
    return "text-red-600";
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            <div>
              <h1 className="text-xl font-semibold text-foreground">Staff Dashboard</h1>
              <p className="text-sm text-muted-foreground">Welcome back, {user.name}</p>
            </div>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container-max section-padding">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Students</p>
                  <p className="text-2xl font-bold text-foreground">{students.length}</p>
                </div>
                <Users className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Students</p>
                  <p className="text-2xl font-bold text-foreground">
                    {students.filter(s => s.status === "Active").length}
                  </p>
                </div>
                <UserPlus className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold text-foreground">
                    {students.filter(s => s.status === "Completed").length}
                  </p>
                </div>
                <Calendar className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg. Attendance</p>
                  <p className="text-2xl font-bold text-foreground">
                    {Math.round(students.reduce((acc, s) => acc + s.attendance, 0) / students.length)}%
                  </p>
                </div>
                <ClipboardList className="h-8 w-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full">
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="attendance">Student Attendance</TabsTrigger>
            {user?.role === "admin" && (
              <>
                <TabsTrigger value="staff-attendance">Staff Attendance</TabsTrigger>
                <TabsTrigger value="salary-management">Salary Management</TabsTrigger>
              </>
            )}
            {user?.role !== "admin" && (
              <TabsTrigger value="my-records">My Records</TabsTrigger>
            )}
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            {/* Add Student Form */}
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Add New Student</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddStudent} className="space-y-4">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                        required
                        placeholder="Enter student name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={newStudent.email}
                        onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                        required
                        placeholder="Enter email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={newStudent.phone}
                        onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="course">Course</Label>
                      <Select 
                        value={newStudent.course} 
                        onValueChange={(value) => setNewStudent({ ...newStudent, course: value })}
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full Stack Web Development">Full Stack Web Development</SelectItem>
                          <SelectItem value="Data Science & Analytics">Data Science & Analytics</SelectItem>
                          <SelectItem value="Digital Marketing Mastery">Digital Marketing Mastery</SelectItem>
                          <SelectItem value="UI/UX Design Professional">UI/UX Design Professional</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button type="submit">
                    <UserPlus className="mr-2 h-4 w-4" />
                    Add Student
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Students List */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Student Management</CardTitle>
                  <div className="flex gap-2">
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search students..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 w-64"
                      />
                    </div>
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-32">
                        <Filter className="mr-2 h-4 w-4" />
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Course</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Attendance</TableHead>
                        <TableHead>Enrolled</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredStudents.map((student) => (
                        <TableRow key={student.id}>
                          <TableCell className="font-medium">{student.name}</TableCell>
                          <TableCell>{student.email}</TableCell>
                          <TableCell>{student.course}</TableCell>
                          <TableCell>
                            <Badge className={getStatusColor(student.status)}>
                              {student.status}
                            </Badge>
                          </TableCell>
                          <TableCell className={getAttendanceColor(student.attendance)}>
                            {student.attendance}%
                          </TableCell>
                          <TableCell>{student.enrollmentDate}</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreVertical className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem 
                                  onClick={() => handleDeleteStudent(student.id)}
                                  className="text-red-600"
                                >
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle>Mark Attendance - {new Date().toLocaleDateString()}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {students.filter(s => s.status === "Active").map((student) => (
                    <div key={student.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <p className="font-medium text-foreground">{student.name}</p>
                        <p className="text-sm text-muted-foreground">{student.course}</p>
                        <p className="text-xs text-muted-foreground">
                          Current Attendance: <span className={getAttendanceColor(student.attendance)}>{student.attendance}%</span>
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          onClick={() => markAttendance(student.id, true)}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <Check className="mr-1 h-4 w-4" />
                          Present
                        </Button>
                        <Button 
                          onClick={() => markAttendance(student.id, false)}
                          size="sm" 
                          variant="outline"
                          className="border-red-300 text-red-600 hover:bg-red-50"
                        >
                          <X className="mr-1 h-4 w-4" />
                          Absent
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Staff Attendance Tab - Admin Only */}
          {user?.role === "admin" && (
            <TabsContent value="staff-attendance" className="space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Staff Attendance - {new Date().toLocaleDateString()}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {staffMembers.map((staff) => (
                      <div key={staff.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <p className="font-medium text-foreground">{staff.name}</p>
                          <p className="text-sm text-muted-foreground">{staff.department}</p>
                          <p className="text-xs text-muted-foreground">
                            Monthly Attendance: <span className={getAttendanceColor(getStaffAttendancePercentage(staff.id))}>{getStaffAttendancePercentage(staff.id)}%</span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button 
                            onClick={() => markStaffAttendance(staff.id, "Present")}
                            size="sm"
                            className="bg-success hover:bg-success/80"
                          >
                            <Check className="mr-1 h-4 w-4" />
                            Present
                          </Button>
                          <Button 
                            onClick={() => markStaffAttendance(staff.id, "Absent")}
                            size="sm" 
                            variant="outline"
                            className="border-destructive text-destructive hover:bg-destructive/10"
                          >
                            <X className="mr-1 h-4 w-4" />
                            Absent
                          </Button>
                          <Button 
                            onClick={() => markStaffAttendance(staff.id, "Leave")}
                            size="sm" 
                            variant="outline"
                            className="border-warning text-warning hover:bg-warning/10"
                          >
                            <Calendar className="mr-1 h-4 w-4" />
                            Leave
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Salary Management Tab - Admin Only */}
          {user?.role === "admin" && (
            <TabsContent value="salary-management" className="space-y-6">
              {/* Add Salary Record */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Add Salary Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={addSalaryRecord} className="space-y-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="staff">Staff Member</Label>
                        <Select 
                          value={newSalaryRecord.staffId} 
                          onValueChange={(value) => setNewSalaryRecord({ ...newSalaryRecord, staffId: value })}
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select staff" />
                          </SelectTrigger>
                          <SelectContent>
                            {staffMembers.filter(s => s.role !== "admin").map((staff) => (
                              <SelectItem key={staff.id} value={staff.id.toString()}>
                                {staff.name} - {staff.department}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="month">Month</Label>
                        <Input
                          id="month"
                          type="month"
                          value={newSalaryRecord.month}
                          onChange={(e) => setNewSalaryRecord({ ...newSalaryRecord, month: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="amount">Amount</Label>
                        <Input
                          id="amount"
                          type="number"
                          value={newSalaryRecord.amount}
                          onChange={(e) => setNewSalaryRecord({ ...newSalaryRecord, amount: e.target.value })}
                          placeholder="Enter amount"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="remarks">Remarks</Label>
                        <Input
                          id="remarks"
                          value={newSalaryRecord.remarks}
                          onChange={(e) => setNewSalaryRecord({ ...newSalaryRecord, remarks: e.target.value })}
                          placeholder="Payment remarks"
                        />
                      </div>
                    </div>
                    <Button type="submit">
                      <DollarSign className="mr-2 h-4 w-4" />
                      Record Payment
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Salary Records */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle>Salary Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Staff Name</TableHead>
                          <TableHead>Month</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Transaction Date</TableHead>
                          <TableHead>Remarks</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {salaryRecords.map((record) => {
                          const staff = staffMembers.find(s => s.id === record.staffId);
                          return (
                            <TableRow key={record.id}>
                              <TableCell className="font-medium">{staff?.name}</TableCell>
                              <TableCell>{record.month}</TableCell>
                              <TableCell>${record.amount}</TableCell>
                              <TableCell>
                                <Badge className={record.status === "Paid" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}>
                                  {record.status}
                                </Badge>
                              </TableCell>
                              <TableCell>{record.transactionDate || "N/A"}</TableCell>
                              <TableCell>{record.remarks}</TableCell>
                              <TableCell>
                                <Button
                                  onClick={() => toggleSalaryStatus(record.id)}
                                  size="sm"
                                  variant="outline"
                                >
                                  {record.status === "Paid" ? "Mark Pending" : "Mark Paid"}
                                </Button>
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* My Records Tab - Staff Only */}
          {user?.role !== "admin" && (
            <TabsContent value="my-records" className="space-y-6">
              {/* My Attendance */}
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>My Attendance Records</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-lg font-semibold text-foreground">
                      Monthly Attendance: <span className={getAttendanceColor(getStaffAttendancePercentage(staffMembers.find(s => s.email === user?.email)?.id || 0))}>
                        {getStaffAttendancePercentage(staffMembers.find(s => s.email === user?.email)?.id || 0)}%
                      </span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    {getMyAttendance().slice(-10).map((record, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border border-border rounded-lg">
                        <span className="text-foreground">{record.date}</span>
                        <Badge className={
                          record.status === "Present" ? "bg-success/10 text-success" :
                          record.status === "Leave" ? "bg-warning/10 text-warning" :
                          "bg-destructive/10 text-destructive"
                        }>
                          {record.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* My Salary Records */}
              <Card className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle>My Salary History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Month</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Transaction Date</TableHead>
                          <TableHead>Remarks</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {getMySalaryRecords().map((record) => (
                          <TableRow key={record.id}>
                            <TableCell className="font-medium">{record.month}</TableCell>
                            <TableCell>${record.amount}</TableCell>
                            <TableCell>
                              <Badge className={record.status === "Paid" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}>
                                {record.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{record.transactionDate || "Pending"}</TableCell>
                            <TableCell>{record.remarks}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;
