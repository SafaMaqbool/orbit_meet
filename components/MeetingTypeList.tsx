"use client";

import { useRouter } from "next/navigation";
import HomeCard from "./HomeCard";
import { useState } from "react";
import MeetingModal from "./MeetingModal";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useToast } from "@/components/ui/use-toast"
import { Textarea } from "./ui/textarea";
import ReactDatePicker from 'react-datepicker';
import { Input } from "./ui/input";

const MeetingTypeList = () => {

    const { toast } = useToast()

    const { user } = useUser();
    const client = useStreamVideoClient();
    const [values, setValues] = useState({
        dateTime: new Date(),
        description: '',
        link: ''
    });

    const [callDetails, setCallDetails] = useState<Call>();

    const router = useRouter();
    const createMeeting = async () => {
        if (!client || !user) return;

        try {

            if (!values.dateTime) {
                toast({ title: "Please select a date and time" });
                return;
            }

            const id = crypto.randomUUID();
            const call = client.call('default', id);

            if (!call) throw new Error('Failed to create call');

            const startAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
            const description = values.description || 'Instant Meeting';


            await call.getOrCreate({
                data: {
                    starts_at: startAt,
                    custom: {
                        description
                    }
                }
            })

            setCallDetails(call);

            if (!values.description) {
                router.push(`/meeting/${call.id}`);
            }

            toast({ title: "Meeting Created !" })

        } catch (error) {
            console.log(error);
            toast({ title: "Failed to create meeting" })
        }

    }

    const [meetingState, setMeetingState] = useState<'isScheduleMeetig' | 'isJoiningMeeting' | 'isInstantMeeting' | undefined>()

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;
    return (
        <section className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4 mb-28">
            <HomeCard
                img="/icons/add-meeting.svg"
                title="Launch Meeting"
                description="Start meeting instantly"
                handleClick={() => setMeetingState('isInstantMeeting')}
                className="bg-dark-6 hover:bg-green-1 hover:text-black transition-colors"

            />
            <HomeCard
                img="/icons/schedule.svg"
                title="Plan Meeting"
                description="Setup meetings for future"
                handleClick={() => setMeetingState('isScheduleMeetig')}
                className="bg-dark-6 hover:bg-green-1 hover:text-black transition-colors"

            />
            <HomeCard
                img="/icons/recordings.svg"
                title="View Sessions"
                description="Access recorded meetings"
                handleClick={() => router.push('/recordings')}
                className="bg-dark-6 hover:bg-green-1 hover:text-black transition-colors"


            />
            <HomeCard
                img="/icons/join-meeting.svg"
                title="Attend Meeting"
                description="Connect Via invitation link"
                handleClick={() => setMeetingState('isJoiningMeeting')}
                className="bg-dark-6 hover:bg-green-1 hover:text-black transition-colors"

            />

            {!callDetails ? (
                <MeetingModal
                    isOpen={meetingState === 'isScheduleMeetig'}
                    onClose={() => setMeetingState(undefined)}
                    title="Launch Meeting"
                    handleClick={createMeeting}
                >
                    <div className="flex flex-col gap-2.5">
                        <label className="text-base text-normal leading-[22px] text-sky-2">Add a description</label>
                        <Textarea className="text-dark-1 border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-base text-normal leading-[22px] text-sky-2">Select Date and Time</label>
                        <ReactDatePicker selected={values.dateTime} onChange={(date) => setValues({ ...values, dateTime: date! })} showTimeSelect timeFormat="HH:mm" timeIntervals={15} timeCaption="time" dateFormat="MMMM d, yyyy h:mm aa" className="w-full text-dark-1 rounded bg-dark-3 p-2 focus: outline-none" />
                    </div>
                </MeetingModal>
            ) : (
                <MeetingModal
                    isOpen={meetingState === 'isScheduleMeetig'}
                    onClose={() => setMeetingState(undefined)}
                    title="Meeting Created"
                    className="text-center"
                    handleClick={() => {
                        navigator.clipboard.writeText(meetingLink);
                        toast({ title: 'Link copied' });
                    }}
                    image="/icons/checked.svg"
                    buttonIcon="/icons/copy.svg"
                    buttonText="Copy Meeting Link"
                />

            )}

            <MeetingModal
                isOpen={meetingState === 'isInstantMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Meeting"
                className="text-center"
                buttonText="Start Meeting"
                handleClick={createMeeting}
            />

            <MeetingModal
                isOpen={meetingState === 'isJoiningMeeting'}
                onClose={() => setMeetingState(undefined)}
                title="Type the link here"
                className="text-center"
                buttonText="Join Meeting"
                handleClick={() => router.push(values.link)}
            >

                <Input placeholder="Meeting Link" className="text-dark-1 border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0" onChange={(e) => setValues({ ...values, link: e.target.value })} />

            </MeetingModal>
        </section>
    )
}

export default MeetingTypeList