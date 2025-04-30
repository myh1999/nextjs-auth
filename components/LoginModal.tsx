'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { SignIn, SignOut } from "./auth-components";

export default function LoginModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button variant='ghost' radius='full' onPress={onOpen}>Sing in / Sign up</Button>

      <Modal hideCloseButton isOpen={isOpen} backdrop='blur' onOpenChange={onOpenChange}>
        <ModalContent>
          <>
            <ModalHeader className="flex flex-col gap-1">Sign up to continue</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
                risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
                quam.
              </p>
              <SignIn provider="gitee" />
              <SignOut></SignOut>
            </ModalBody>
            <ModalFooter>
              We use Featurebase to collect feedback from users like you. Sign up to post and vote.
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  );
}
