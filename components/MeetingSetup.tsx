'use client';

import { DeviceSettings, VideoPreview, useCall } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {

    const [isMicCamToggleOn, setIsMicCamToggleOn] = useState(false);
    const call = useCall();

    if (!call) {
        throw new Error('useCall must be used withim StreamCal component');

    }

    useEffect(() => {

        if (isMicCamToggleOn) {
            call?.camera.disable();
            call?.microphone.disable();
        } else {
            call?.camera.enable();
            call?.microphone.enable();
        }

    }, [isMicCamToggleOn, call?.camera, call?.microphone])


    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-3 text-dark-1">
            <h1 className="text-2xl font-bold">
                Meeting Setup
            </h1>
            <VideoPreview />
            <div className="flex h-16 items-center juc gap-3">
                <label className="flex items-center justify-center gap-2 font-medium">
                    <input type="checkbox" checked={isMicCamToggleOn} onChange={(e) => setIsMicCamToggleOn(e.target.checked)} />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
                <Button className="rounded-md bg-green-1 px-4 py-2.5" onClick={

                    () => {
                        call.join();
                        setIsSetupComplete(true);
                    }}>
                    Join meeting
                </Button>
            </div>
        </div>
    )
}

export default MeetingSetup