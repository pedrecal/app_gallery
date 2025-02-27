import Link from "next/link";

const mockURLs = [
  "https://hc69g052zr.ufs.sh/f/1mJ4osaXfm30KEBKPyJUSV6wQGDW5axvsqY1T2BoNRbhuIXz",
  "https://hc69g052zr.ufs.sh/f/1mJ4osaXfm30sw9aESCcFyvwHk3mb9OiQ1LDU2AlgYXozBPj",
  "https://hc69g052zr.ufs.sh/f/1mJ4osaXfm30op2HJuSpGqIcJU4VKeSTnEmi2RrgYCuZkNl5",
  "https://hc69g052zr.ufs.sh/f/1mJ4osaXfm30MUX4fEz3yHlkhEcxOfa8vpYmRoPA5FbJnwWu",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
