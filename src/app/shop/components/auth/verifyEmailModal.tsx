import {
  Box,
  Modal,
  ModalBody,
  Text,
  ModalContent,
  ModalOverlay,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { UnVerifiedUserPage } from "./unVerifiedUser";

export default function UnVerifiedModalContainer({
  isOpen,
  onClose,
  verify,
}: {
  isOpen: boolean;
  onClose: any;
  verify: boolean;
}) {
  const bg = useColorModeValue("#FFFFFF", "#000000");
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount
    >
      <ModalOverlay>
        <Box
          minW={"100vw"}
          height={"100vh"}
          backdropFilter={"blur(10px)"}
          bg={"rgb(30, 30, 30, 0.5)"}
        ></Box>
      </ModalOverlay>
      <ModalContent
        bg={bg}
        padding={"50px 20px 50px 20px"}
        borderRadius={"3xl"}
        maxW={{ base: "90%", xl: "40%" }}
      >
        <ModalBody>
         
          <UnVerifiedUserPage onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
