
import { Separator } from "../../ui/separator";
import LanguageSelect from "./language-select";

export default function AccountSetting() {

    return (
        <div>
            <h3 className="font-semibold text-lg">Tài khoản</h3>
            <p className="text-secondary-foreground text-sm">Cài đặt tài khoản của bạn.</p>
            <Separator className="my-4" />
            <LanguageSelect />
        </div>
    )
}