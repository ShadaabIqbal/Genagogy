import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input, Label } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function RegistrationModal({ enrollment, onSubmit }) {
  const [form, setForm] = useState({
    photo: "",
    address: "",
    dob: "",
    gender: "Male",
    guardianName: "",
    guardianPhone: "",
    batch: "",
    courseDuration: "",
    courseFee: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ enrollmentId: enrollment._id, ...form });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Register</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Register {enrollment.name}</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <Label>Photo URL</Label>
            <Input name="photo" value={form.photo} onChange={handleChange} />
          </div>
          <div>
            <Label>Address</Label>
            <Input
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Gender</Label>
            <Select
              name="gender"
              value={form.gender}
              onValueChange={(v) => setForm({ ...form, gender: v })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Guardian Name</Label>
            <Input
              name="guardianName"
              value={form.guardianName}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Guardian Phone</Label>
            <Input
              name="guardianPhone"
              value={form.guardianPhone}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Batch</Label>
            <Input name="batch" value={form.batch} onChange={handleChange} />
          </div>
          <div>
            <Label>Course Duration</Label>
            <Input
              name="courseDuration"
              value={form.courseDuration}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Course Fee</Label>
            <Input
              type="number"
              name="courseFee"
              value={form.courseFee}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
