"use client";
import Sidebar from "@/components/admin/Sidebar";
import UploadPhoto from "@/components/UploadPhoto";
import {
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DndContext } from "@dnd-kit/core";
import { Draggable } from "@/components/dndkit/Draggable";
import { Droppable } from "@/components/dndkit/Dropgable";

function AddNewRoom() {
  const { register, handleSubmit } = useForm<any>();
  const [isSelected, setIsSelected] = useState(false);
  const bedtypes = [
    { key: "singleBed", label: "Single Bed" },
    { key: "doubleBed", label: "Double Bed" },
    { key: "kingSizeBed", label: "King Size Bed" },
    { key: "twinBed", label: "Twin Bed" },
  ];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-auto">
      <Sidebar />
      <div className="flex w-[1067px] flex-col">
        <div className="flex h-[71px] items-center justify-between bg-white px-[53px]">
          <span className="text-[20px] font-bold">Create New Room</span>
          <div className="flex gap-2">
            <Button
              type="button"
              className="font-open-sans h-[42px] w-[103px] rounded-md border border-[#E76B39] bg-white text-[16px] font-semibold text-[#E76B39]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="font-open-sans h-[42px] w-[103px] rounded-md bg-[#C14817] text-[16px] font-semibold text-white"
              form="add-room-form"
            >
              Create
            </Button>
          </div>
        </div>

        <div className="bg-[#F6F7FC] px-[53px]">
          <form
            id="add-room-form"
            onSubmit={handleSubmit(onSubmit)}
            className="font-inter mt-[35px] flex flex-col gap-5 border border-[#E4E6ED] px-[71px] py-[35px]"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[20px] font-semibold text-[#9AA1B9]">
                Basic Information
              </span>
              <div className="flex flex-col gap-5">
                <Input
                  {...register("roomType", { required: true })}
                  label="Room Type *"
                  labelPlacement="outside"
                  type="text"
                  placeholder="Enter your room type"
                  variant="bordered"
                  radius="sm"
                  className="text-[16px] text-[#2A2E3F]"
                />
                <div className="grid grid-cols-2 gap-6">
                  <Input
                    {...register("roomSize", { required: true })}
                    label="Room Size (sqm) *"
                    labelPlacement="outside"
                    type="number"
                    placeholder="Enter the room size"
                    variant="bordered"
                    radius="sm"
                    className="text-[16px] text-[#2A2E3F]"
                  />

                  <Select
                    {...register("bedType", { required: true })}
                    label="Bed Type"
                    labelPlacement="outside"
                    placeholder="Select bed type"
                    variant="bordered"
                    radius="sm"
                    className="text-[16px] text-[#2A2E3F]"
                  >
                    {bedtypes.map(({ key, label }) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </Select>

                  <Select
                    {...register("Guests", { required: true })}
                    label="Guests"
                    labelPlacement="outside"
                    placeholder="Select Guest"
                    variant="bordered"
                    radius="sm"
                  >
                    {[1, 2, 3, 4, 5, 6].map((guest) => (
                      <SelectItem key={guest} value={guest}>
                        {guest}
                      </SelectItem>
                    ))}
                  </Select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Input
                {...register("Price", { required: true })}
                label="Price Per Night*"
                labelPlacement="outside"
                type="text"
                placeholder="Enter Price"
                variant="bordered"
                radius="sm"
              />
              <div className="flex gap-2">
                <Checkbox
                  isSelected={isSelected}
                  onValueChange={setIsSelected}
                  className="mt-[15px] flex items-center self-center"
                >
                  <label className="text-[16px]">Promotion Price</label>
                </Checkbox>
                <Input
                  {...register("Promotion", { required: isSelected })}
                  type="text"
                  placeholder="Enter Promotion Price"
                  variant={isSelected ? "bordered" : "faded"}
                  radius="sm"
                  disabled={!isSelected}
                  className="flex w-[215px] self-end"
                />
              </div>
            </div>

            <Textarea
              label="Room Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              size="lg"
              variant="bordered"
              radius="sm"
            />

            <div>
              <span>Room Image</span>
              <div>
                <span>Main Image *</span>
                <UploadPhoto register={register} />
              </div>

              <div>
                <span>Image Gallery(At least 4 pictures) *</span>
                <DndContext onDragEnd={() => null}>
                  <UploadPhoto register={register} />
                  <UploadPhoto register={register} />
                  <UploadPhoto register={register} />
                  <UploadPhoto register={register} />
                </DndContext>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span>Room Amenities</span>

              <div className="flex flex-row gap-3">
                <Input
                  label="Amenities"
                  labelPlacement="outside"
                  placeholder="Enter amenities"
                  type="text"
                  variant="bordered"
                  radius="sm"
                  className="w-[400px"
                />

                <Button className="flex self-end">Delete</Button>
              </div>

              <Button className="font-open-sans h-[42px] w-[150px] rounded-md border border-[#E76B39] bg-white text-[16px] font-semibold text-[#E76B39]">
                Add Amenities
              </Button>
            </div>
          </form>

          <div className="flex justify-end">
            <Button className="h-[42px] w-[150px] rounded-md bg-transparent text-[16px] font-semibold text-[#9AA1B9]">
              Delete Room
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewRoom;
