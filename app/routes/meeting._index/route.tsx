import { selectIsConnectedToRoom, useHMSActions, useHMSStore } from "@100mslive/react-sdk"
import JoinForm from "./Join"
import { useEffect } from "react"
import Conference from "./Conference"

export default function Meeting() {
  const isConnected = useHMSStore(selectIsConnectedToRoom)
  const hmsActions = useHMSActions()

  useEffect(() => {
    window.onunload = () => {
      if (isConnected) {
        hmsActions.leave()
      }
    }
  }, [hmsActions, isConnected])

  return (
    <div>
      <h1>Meeting</h1>
      {isConnected ? (
        <Conference />
      )
        : (
          <JoinForm />
        )}
    </div>
  )
}