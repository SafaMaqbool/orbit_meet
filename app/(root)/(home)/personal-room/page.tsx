"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs"
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Table = ({ title, description }: { title: string, description: string }) => (
    <div className="flex flex-col items-start gap-2 xl:flex-row">
        <h1 className="text-base text-dark-6 lg:text-xl xl:min-w-32">
            {title}:
        </h1>
        <h1 className="truncate text-sm max-sm:max-w-[320px] lg:text-xl bg-dark-10 px-3 py-1 rounded-md">
            {description}
        </h1>
    </div>
)

const PersonalRoom = () => {

    const { toast } = useToast();
    const router = useRouter();

    const client = useStreamVideoClient();

    const { user } = useUser();
    const meetingId = user?.id;
    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`;

    const { call } = useGetCallById(meetingId!);

    const startRoom = async () => {

        if (!client || !user) return;

        if (!call) {
            const newCall = client.call('default', meetingId!);
            await newCall.getOrCreate({
                data: {
                    starts_at: new Date().toISOString(),
                }
            })

        }

        router.push(`/meeting/${meetingId}?personal=true`);

    }

    return (
        <section className='flex size-full flex-col gap-10 text-dark-1'>
            <h1 className='text-3xl font-bold'>
                Private Meeting Room
            </h1>

            <div className='flex w-full flex-col gap-8 xl:max-w-[900px]'>
                <Table title='Topic' description={`${user?.username}'s meeting room`} />
                <Table title='Meeting ID' description={meetingId!} />
                <Table title='Invite Link' description={meetingLink} />
            </div>
            <div className="flex gap-5">
                <Button className="bg-blue-1" onClick={startRoom}>
                <Image src="/icons/play.svg" alt="play" width={18} height={18} /> &nbsp;
                    Start Meeting
                </Button>
                <Button className="bg-dark-3 text-white" onClick={() => {
                    navigator.clipboard.writeText(meetingLink);
                    toast({
                        title: "Link Copied",
                    });
                }}>
                    <Image src="/icons/copy.svg" alt="play" width={18} height={18} /> &nbsp;
                    Copy Invitition
                </Button>
            </div>
        </section>
    )
}

export default PersonalRoom