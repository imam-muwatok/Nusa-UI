import React, { useState } from "react";
import CodeBlock from "../components/ui/CodeBlock";
import Rating from "../components/ui/Rating";
import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

export default function RatingPage() {
  const [rating, setRating] = useState(3);
  const [rating2, setRating2] = useState(0);
  const [rating3, setRating3] = useState(2.5);
  const [heartRating, setHeartRating] = useState(3);

  return (
    <main className="flex-1 lg:pl-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black md:text-6xl mb-4">Rating</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-lg">
          Komponen rating bintang untuk memberikan penilaian atau umpan balik.
        </p>
      </div>

      <div className="space-y-12">
        {/* Basic Example */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Basic Example</h2>
          <CodeBlock code={`const [rating, setRating] = useState(3);

<Rating value={rating} onChange={setRating} />`}>
            <div className="flex flex-col items-start gap-4">
              <Rating value={rating} onChange={setRating} />
              <p className="text-sm text-zinc-500">Current Rating: {rating}</p>
            </div>
          </CodeBlock>
        </section>

        {/* Half Star */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Half Star</h2>
          <CodeBlock code={`const [rating, setRating] = useState(2.5);

<Rating allowHalf value={rating} onChange={setRating} />`}>
            <div className="flex flex-col items-start gap-4">
              <Rating allowHalf value={rating3} onChange={setRating3} />
              <p className="text-sm text-zinc-500">Current Rating: {rating3}</p>
            </div>
          </CodeBlock>
        </section>

        {/* Custom Icon */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Icon</h2>
          <CodeBlock code={`import { HeartIcon } from "@heroicons/react/24/solid";
import { HeartIcon as HeartIconOutline } from "@heroicons/react/24/outline";

const [rating, setRating] = useState(3);

<Rating 
  value={rating} 
  onChange={setRating} 
  icon={HeartIcon} 
  emptyIcon={HeartIconOutline} 
  activeColor="text-red-500" 
/>`}>
            <div className="flex flex-col items-start gap-4">
              <Rating value={heartRating} onChange={setHeartRating} icon={HeartIcon} emptyIcon={HeartIconOutline} activeColor="text-red-500" />
              <p className="text-sm text-zinc-500">Current Rating: {heartRating}</p>
            </div>
          </CodeBlock>
        </section>

        {/* With Count */}
        <section>
          <h2 className="text-2xl font-bold mb-6">With Count</h2>
          <CodeBlock code={`<Rating value={4.5} readOnly allowHalf count={230} />`}>
            <div className="flex flex-col items-start gap-4">
              <Rating value={4.5} readOnly allowHalf count={230} />
            </div>
          </CodeBlock>
        </section>

        {/* Sizes */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Sizes</h2>
          <CodeBlock code={`<Rating size="sm" value={4} readOnly />
<Rating size="md" value={4} readOnly />
<Rating size="lg" value={4} readOnly />
<Rating size="xl" value={4} readOnly />`}>
            <div className="flex flex-col items-start gap-4">
              <Rating size="sm" value={4} readOnly />
              <Rating size="md" value={4} readOnly />
              <Rating size="lg" value={4} readOnly />
              <Rating size="xl" value={4} readOnly />
            </div>
          </CodeBlock>
        </section>

        {/* Read Only */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Read Only</h2>
          <CodeBlock code={`<Rating value={5} readOnly />`}>
            <Rating value={5} readOnly />
          </CodeBlock>
        </section>

        {/* Custom Max */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Custom Max Stars</h2>
          <CodeBlock code={`<Rating max={10} value={rating2} onChange={setRating2} />`}>
             <div className="flex flex-col items-start gap-4">
              <Rating max={10} value={rating2} onChange={setRating2} />
              <p className="text-sm text-zinc-500">Current Rating: {rating2}</p>
            </div>
          </CodeBlock>
        </section>
      </div>
    </main>
  );
}