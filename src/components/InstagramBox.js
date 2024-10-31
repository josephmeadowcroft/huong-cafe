import Link from "next/link";
import InstagramIcon from "../../public/icons/InstagramIcon";
import PopButton from "./PopButton";

export default function InstagramBox() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold text-center py-4 bg-primary text-white">
        Follow Us on Instagram
      </h2>
      <div className="p-6">
        <div className="flex flex-col items-center mb-6">
          <p className="text-center text-gray-600 max-w-md">
            Stay updated with our latest news, events, and updates. Join our
            Instagram community!
          </p>
        </div>
        <div className="text-center justify-center items-center inline-flex w-full">
          <PopButton
            href="https://instagram.com/huong.cafe190"
            target="_blank"
            title="Follow @huong.cafe190"
            btnStyles="bg-primary"
            textStyles="text-white"
          />
        </div>
      </div>
    </div>
  );
}
