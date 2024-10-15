import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalContent,
  Button,
} from "@nextui-org/react";

// Array of images for the carousel
const images = [
  {
    src: "/images/tupt-scheduler/mobile-1.png",
    alt: "Image 1",
    description: "Description for image 1",
  },
  {
    src: "/images/tupt-scheduler/mobile-2.png",
    alt: "Image 2",
    description: "Description for image 2",
  },
];

const TUPTSchedulerModalMobile = ({ isOpen, onOpenChange }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Modal
      size="5xl"
      backdrop="opaque"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        backdrop:
          "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
      }}
    >
      <ModalContent className="bg-zinc-900 text-white font-montserrat">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-white">
              {/* TEAMPOOR - Motorcycle Parts & Services */}
            </ModalHeader>
            <ModalBody className="text-white flex flex-col items-center">
              <div className="relative w-full flex items-center justify-center">
                <img
                  src={images[currentImageIndex].src}
                  alt={images[currentImageIndex].alt}
                  className="w-full rounded"
                />

                {/* Left Navigation Button */}
                <div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded cursor-pointer"
                  onClick={prevImage}
                >
                  &lt;
                </div>

                {/* Right Navigation Button */}
                <div
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded cursor-pointer"
                  onClick={nextImage}
                >
                  &gt;
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex flex-row gap-1 flex-wrap">
                  <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                    <p className="text-[10px] text-red-500">Mobile</p>
                  </div>

                  <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                    <p className="text-[10px] text-red-500">MongoDB</p>
                  </div>

                  <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                    <p className="text-[10px] text-red-500">Express</p>
                  </div>

                  <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                    <p className="text-[10px] text-red-500">React JS</p>
                  </div>

                  <div className="bg-red-500/10 w-fit px-2 rounded-full flex items-center">
                    <p className="text-[10px] text-red-500">Node JS</p>
                  </div>
                </div>

                <p className="font-bold text-xl">TUPT-T Scheduler</p>
                <p className="text-sm">
                  The TUP-T Sports and eSports Scheduler is a dynamic platform
                  designed to streamline the organization and management of
                  sports and esports events for students and teams. With an
                  intuitive interface, it allows users to easily create, update,
                  and manage schedules for various activities, including
                  tournaments, practices, and matches.
                </p>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default TUPTSchedulerModalMobile;
