import { Button } from "@/components/ui/button";
import {
  Dialog, 
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";

export function LeadModal({
  open,
  toggleOpen,
}: {
  open: boolean;
  toggleOpen: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={toggleOpen}> 
      <DialogContent className="sm:max-w-md max-h-[calc(100vh-10px)] overflow-y-auto" >
        <DialogHeader>
          <DialogTitle className="text-2xl text-start">Schedule a call with Unibank</DialogTitle>
          <DialogDescription className="text-start">
            Give us your contact details and then one of our talented Customer Support Officers will call you back.
          </DialogDescription>
        </DialogHeader>
        <div className="grid  grid-cols-1 gap-3">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="customer_fullname">Customer fullname</Label>
            <Input id="customer_fullname"   />
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="customer_phone_number">Phone number</Label>
            <Input id="customer_phone_number"  />
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="contact_time">Contact time</Label>
            <Input id="contact_time"  />
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="contact_reason">Contact reason</Label>
            <Input id="contact_reason" />
          </div>

          <div className="grid flex-1 gap-2">
            <Label htmlFor="note">Extra note</Label>
            <Textarea id="note" />
          </div>
        </div>
        <p className="text-sm">Please note that Submitting this form you declare that you read, understand and accept our Privacy Policy.</p>
        <DialogFooter className="sm:justify-start flex flex-col lg:flex-row gap-2">
          <Button
              type="button"  
              onClick={() => toggleOpen(false)}
            >
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
