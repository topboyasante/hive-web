import BackButton from "@/components/ui/back-button";

export default function Page() {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center w-full h-full">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Oops!</h2>
          <p className="text-[#a3a3a3] text-sm">
            The page you&apos;re looking for does not exist.
          </p>
          <div className="my-5">
            <BackButton />
          </div>
        </div>
      </div>
    </div>
  );
}
