import { HMSRoomProvider } from "@100mslive/react-sdk"
import { Outlet } from "@remix-run/react"

import './meeting-styles.css'

export default function Index() {
  return (
    <HMSRoomProvider>
      <Outlet />
    </HMSRoomProvider>
  );
}
