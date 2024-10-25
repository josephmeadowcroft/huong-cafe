import Link from "next/link";
import InstagramIcon from "../../public/icons/InstagramIcon";

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
        <div className="text-center">
          <Link
            href="https://instagram.com/huong.cafe190"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition duration-150 ease-in-out"
          >
            <InstagramIcon className="w-5 h-5 mr-2" aria-hidden="true" />
            Follow @huongcafe
          </Link>
        </div>
      </div>
    </div>
  );
}
