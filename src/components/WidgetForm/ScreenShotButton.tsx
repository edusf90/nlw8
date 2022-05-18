import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Loadingx } from '../Loadingx'

interface ScreenshotButtonProps {
  screenshot: string
  onScreenshotTook: (scrrenshot: string) => void
}

export function ScreenShotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenShot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    // console.log(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return <p>Foto</p>
  }

  return (
    <button
      onClick={handleTakeScreenShot}
      type="button"
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
      {isTakingScreenshot ? <Loadingx /> : <Camera className="w-6 h-6" />}
    </button>
  )
}
