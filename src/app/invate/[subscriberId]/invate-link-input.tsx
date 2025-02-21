'use client'
import { IconButton } from "@/components/icon-button";
import { InputFieldRoot, InputIconRoot, InputRoot } from "@/components/input";
import { Copy, Link } from "lucide-react";
interface InviteLinkInputProps {
  inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink)
  }

  return (
    <InputRoot>
      <InputIconRoot>
        <Link className="size-5" />
      </InputIconRoot>
      <InputFieldRoot
        readOnly
        className="text-gray-300 text-lg leading-relaxed w-full"
        defaultValue={inviteLink}
      />
      <IconButton className="-mr-2" onClick={copyInviteLink}>
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  );
}