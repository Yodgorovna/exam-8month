import { CustomCarousel } from "@/components/home/CustomCarousel";
import { Notebook } from "@/components/home/NoteBook";
import { Phone } from "@/components/home/Phone";
import { Washing } from "@/components/home/WashingM";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto pt-1">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-1/4">
            <Sidebar />
          </div>

          <div className="w-full lg:w-3/4 dark:bg-gray-900 p-4 lg:p-6 rounded-lg">
            <div className="mb-6">
              <CustomCarousel />
            </div>

            <div className="mb-6">
              <Notebook />
            </div>

            <div className="mb-6">
              <Phone />
            </div>

            <div>
              <Washing />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
