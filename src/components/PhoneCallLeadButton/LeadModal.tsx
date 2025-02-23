import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import Link from "next/link";

export function LeadModal({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={toggleOpen}>
      <DialogContent className="sm:max-w-md max-h-[calc(100vh-10px)] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl text-start">
            Schedule a call with Unibank
          </DialogTitle>
          <DialogDescription className="text-start">
            Give us your contact details and then one of our talented Customer
            Support Officers will call you back.
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-3">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="customer_fullname">Customer fullname</Label>
            <Input id="customer_fullname" />
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="customer_phone_number">Phone number</Label>
            <Input id="customer_phone_number" />
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="contact_time">Contact time</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent className="w-full min-w-0">
                <SelectGroup>
                  <SelectLabel>Select best slot </SelectLabel>
                  <SelectItem value="apple">Morning  - 08.00 AM  - 12.00 PM</SelectItem>
                  <SelectItem value="banana">Midday  - 12.00 PM  - 02.00 PM</SelectItem>
                  <SelectItem value="blueberry">Afternoon  - 02.00 PM  - 06.00 PM</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="contact_reason">Contact reason</Label>

            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent className="w-full min-w-full">
                <SelectGroup>
                  <SelectLabel>Select the reason </SelectLabel>
                  <SelectItem value="apple">Corporate Banking</SelectItem>
                  <SelectItem value="banana">App Mobile Issue</SelectItem>
                  <SelectItem value="blueberry">Marketing Campaign</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="note">Extra note</Label>
            <Textarea id="note" />
          </div>
        </div>
        <p className="text-sm">
          Please note that Submitting this form you declare that you read,
          understand and accept our{" "}
          <Link href="#" className="text-blue-500 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <DialogFooter className="sm:justify-start flex flex-col lg:flex-row gap-2">
          <Button type="button" onClick={() => toggleOpen(false)}>
            Schedule Callback
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => toggleOpen(false)}
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
