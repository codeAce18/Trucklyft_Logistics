import Image from "next/image";
import NotificationSvg from "../../public/assets/NotificationSvg.svg";
import FilterIcon from "../../public/assets/FilterIcon.svg";
import ListIcon from "../../public/assets/ListIcon.svg";
import GridIcon from "../../public/assets/GridIcon.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const CarriersContent = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Example total pages for pagination

  const toggleView = (view: boolean) => {
    setIsGridView(view);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Dashboard Header */}
      <div className="bg-[#FFFFFF] border-b-[1px] border-b-[#E6E5E766] h-[64px] w-full">
        <div className="flex items-center justify-end gap-x-6 mr-10 mt-[32px]">
          <div className="cursor-pointer">
            <Image src={NotificationSvg} alt="NotificationIcon" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="h-[32px] w-[32px] bg-[#6841C7] rounded-full flex items-center justify-center">
              <h1 className="font-bold text-[12px] text-white">BM</h1>
            </div>
            <h1 className="text-[#090318] font-semibold text-[12px]">
              Blueholdings Manufacturing
            </h1>
          </div>
        </div>
      </div>

      <div className="pt-10 px-10">
        <h1 className="text-[#090318] text-[28px] font-extrabold">Carriers</h1>
        <p className="pt-2 text-[#090318] text-[18px]">
          Select a carrier to initiate a tender
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex items-center justify-between px-10 pt-10">
        <div className="flex items-center gap-8">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for a carrier"
              className="w-[263px] h-[48px] pl-12"
            />
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <SearchIcon className="w-[16px] h-[16px] text-[#9C9AA2]" />
            </div>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Image src={FilterIcon} alt="FilterIcon" />
            <span className="text-[#6841C7] text-[18px] font-semibold">
              Filter
            </span>
          </Button>
        </div>

        {/* View Toggle Buttons */}
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className={`w-[56px] h-[48px] ${
              !isGridView ? "bg-[#6841C7] text-white" : "bg-gray-100"
            }`}
            onClick={() => toggleView(false)}
          >
            <Image src={ListIcon} alt="ListIcon" />
          </Button>
          <Button
            variant="default"
            className={`w-[56px] h-[48px] ${
              isGridView ? "bg-[#6841C7] text-white" : "bg-gray-100"
            }`}
            onClick={() => toggleView(true)}
          >
            <Image src={GridIcon} alt="GridIcon" />
          </Button>
        </div>
      </div>

      {/* Content Section (Grid or List View) */}
      <div className="mt-10">
        {isGridView ? (
          <div className="grid grid-cols-4 gap-4">
            {/* Grid view - each carrier displayed as a card */}
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-bold">DHL</h3>
              <p>Truck</p>
              <p>Rating: 4.6</p>
              <Button className="bg-[#6841C7] text-white mt-4">
                Initiate Tender
              </Button>
            </div>
            {/* Repeat for other carriers */}
          </div>
        ) : (
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Carrier</TableHead>
                  <TableHead>Vehicle Type</TableHead>
                  <TableHead>Plate Number</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Interstate</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>DHL</TableCell>
                  <TableCell>Truck</TableCell>
                  <TableCell>FKJ-24AP1</TableCell>
                  <TableCell>Oshodi, Lagos</TableCell>
                  <TableCell>Yes</TableCell>
                  <TableCell>4.6</TableCell>
                  <TableCell>Available</TableCell>
                </TableRow>
                {/* Repeat rows for other carriers */}
              </TableBody>
            </Table>

            {/* Pagination Section */}
            <div className="flex items-center justify-center mt-6 gap-2">
              <Button
                variant="outline"
                className="px-4 py-2"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              {[...Array(totalPages)].map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`px-4 py-2 ${
                    currentPage === index + 1
                      ? "bg-[#6841C7] text-white"
                      : "bg-gray-100"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                className="px-4 py-2"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarriersContent;
