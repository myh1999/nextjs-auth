import React from 'react'
import LoginModal from './LoginModal'
import { auth } from 'auth'
import UserMenu from './UserMenu';

export default async function UserButton() {
  const session = await auth();
  if (!session?.user) return <LoginModal />;

  return (
    <>
      {session.user.name}
      <LoginModal />
      <UserMenu></UserMenu>
    </>
  )
}
