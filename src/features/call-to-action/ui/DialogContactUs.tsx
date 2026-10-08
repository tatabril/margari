import { DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/shared/ui/dialog";
import { MessageButton } from "./MessageButton";
import { siteConfig } from "@/shared/config";
import { FaTelegramPlane } from "react-icons/fa";
import { MaxIcon } from "@/shared/assets/max-icon";
import { CallButtonMobile, CallButtonDesktop } from "./CallButton";
import { useMediaQuery } from "@/shared/hooks";

export function DialogContactUs() {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  return (
   
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Свяжитесь с нами</DialogTitle>
          <DialogDescription/>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-muted-foreground text-start">Позвоните нам:</p>
            {isMobile ? <CallButtonMobile  
                 isArrowRight 
                 isPhoneIcon={false}
                 label="Позвонить мастеру" /> : <CallButtonDesktop />}
            <p className="text-sm text-muted-foreground mt-3 text-start">Или напишите: </p>
            <div className="flex flex-row gap-2">
            <MessageButton href={siteConfig.messengers.telegram} ariaLabel="Telegram" testId="link-telegram" icon={<FaTelegramPlane />} label="Телеграм" size="lg"/>
            <MessageButton href={siteConfig.messengers.max} ariaLabel="Max" testId="link-max" icon={<MaxIcon className="w-5 h-5" />} label="МАКС" size="lg"/>
            </div>
            </div>
        

        </DialogHeader>
      </DialogContent>
   
  );
}