"use client";

import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import CreateTweetCard from "./CreateTweetCard";

const CreateTweetModal = ({ isOpen, onOpen, onClose }: any) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create a Tweet!</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
            <CreateTweetCard isModal={true}/>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="linkedin" variant='solid' borderRadius={20}>Post</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateTweetModal;
