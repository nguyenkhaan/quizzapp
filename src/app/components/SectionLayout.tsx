import { cn } from "@/lib/utils"
const SectionLayout = ({
   customStyle= '', 
   children 
} : {customStyle? : string , children : React.ReactNode }) => 
{
    return (
        <div className={cn(customStyle , "w-screen relative left-1/2 right-1/2 -translate-x-1/2")}>
            <section className="max-w-[1440px] h-full mx-auto">
                {children}
            </section>
        </div>
    )
}
export default SectionLayout


