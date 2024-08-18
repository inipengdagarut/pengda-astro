interface Props {
    fullName: string
    avatar: string
    address: string
    phone: string[]
    email: string
}


import {
    Card,
    CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { EnvelopeClosedIcon, MobileIcon } from "@radix-ui/react-icons"

const PhoneNumber = ({ phone }: { phone: string }) => {
    return (
        <>
            <a href={`tel:${phone}`} className="text-sm mb-4 lg:mb-2 flex items-center hover:underline">
                <MobileIcon className="mr-1" />
                {phone}
            </a>
        </>
    )
}

const getInitial = (theName: string | null) => {
    if (!theName) {
        return 'X';
    }
    return theName.charAt(0).toUpperCase();
};

export const AnggotaCard: React.FC<Props> = ({ fullName, avatar, address, phone, email }) => {

    return (
        <Card className="max-w-prose shadow-none  mb-2 lg:mb-0">
            <CardContent className="p-4 flex space-x-4">
                <div>
                    <Avatar>
                        <AvatarImage src={avatar} alt={fullName} />
                        <AvatarFallback className="font-serif">{getInitial(fullName)}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="w-full">
                    <h4 className="font-bold font-serifs mb-1 text-zinc-800">{fullName}</h4>
                    <address className="not-italic text-sm mb-4 lg:mb-2">{address}</address>
                    <div className="lg:flexs justify-between ">
                        <div>
                            {
                                phone.map(phn => (
                                    <PhoneNumber phone={phn} />
                                ))
                            }
                        </div>
                        <div>
                            <a href={`mailto:${email}`} className="text-sm flex mb-4 lg:mb-2 items-center hover:underline">
                                <EnvelopeClosedIcon className="mr-1" />
                                {email}
                            </a>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

