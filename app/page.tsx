import React from 'react';
import { ChevronLeft, ChevronRight, NotepadText, Plus, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const medicines = [
  { rubric: "Abdomen, anxiety in, extending into head", remedies: "Laur." },
  { rubric: "Abdomen, heat, extending, head", remedies: "Alum., Carbn-o., Indg., Kali-c., Lyc., Mag-m., Nat-s., Plb., Sumb." },
  { rubric: "Back, heat, flushes, spine, in, warm air streaming up spine into head", remedies: "Ars., Sumb. ..." },
  { rubric: "Back, injuries of the spine, after, lies on back, jerking head backward", remedies: "Hyper." },
  { rubric: "Back, orgasm in nape of neck, extending over top of head to forehead, afternoon during motion", remedies: "Mang. +" },
  { rubric: "Abdomen, anxiety in, extending into head", remedies: "Laur." },
];

export default function page() {
  return (
    <Dialog open={true}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Add Medicines with DrCFO AI</DialogTitle>
        </DialogHeader>
        <div className="text-sm text-muted-foreground">
          Search according to symptoms & add to the recommendations
        </div>
        <div className="flex items-center space-x-2 my-2 bg-gray-100 p-2">
          <Select defaultValue="Kent">
            <SelectTrigger className="w-[180px]">
              <SelectValue>
                <div className="flex items-center">
                  <span className="mr-2 flex text-gray-500 font-medium"><NotepadText className='w-4 h-4 mt-0.5 items-center justify-center text-primary mr-1' /> Repertory:</span>
                  Kent
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Kent">Kent</SelectItem>
            </SelectContent>
          </Select>
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search symptoms"
              defaultValue="Head"
              className="pl-8"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between">
        <div className="text-sm text-muted-foreground">
          High number of results. Maybe try narrowing your search using '-', like 'head, -back*'.
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-bold">7144</span> Total Results
        </div>
        </div>
        <hr />
        <div className="flex justify-between text-sm my-2">
          <div className="space-x-2">
            <span className="p-2 border-b-2 border-primary">
            <Button variant="link" className="text-primary font-bold">Search</Button>
            </span>
            <Button variant="ghost" className="text-muted-foreground p-0">Selected (0)</Button>
          </div>
        </div>
        <div className="flex justify-between">
        <div className='text-sm'>
          <span className="font-semibold">Showing 1-10</span> of 7144 Matches
        </div>
        <div className="flex items-center space-x-2">
            <Button variant="secondary" size="sm" disabled><ChevronLeft className='mr-1.5 w-4 h-4'/>Previous</Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <span>...</span>
            <Button variant="outline" size="sm">72</Button>
            <Button variant="secondary" size="sm">Next <ChevronRight className='ml-1.5 w-4 h-4' /></Button>
          </div>
        </div>
        <ScrollArea className="flex-grow">
          <Table>
            <TableHeader className='bg-gray-100'>
              <TableRow>
                <TableHead>Rubric</TableHead>
                <TableHead>Remedies</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {medicines.map((medicine, index) => (
                <TableRow key={index}>
                  <TableCell className="py-2">{medicine.rubric}</TableCell>
                  <TableCell className="py-2">{medicine.remedies}</TableCell>
                  <TableCell className="py-2">
                    <Button variant="default" size="sm" className="h-8 w-8 p-0">
                      <Plus className='w-4 h-4' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline">Cancel</Button>
          <Button disabled>Add Medicine</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}