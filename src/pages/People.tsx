import { useState } from "react";
import { people } from "../code/people";

export function People() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  console.log(selectedTags);

  let filteredPeople = [];
  for (const person of people) {
    if (
      selectedTags.length === 0 ||
      selectedTags.some((tag) => person.tags?.includes(tag))
    ) {
      filteredPeople.push(person);
    }
  }

  const tagCount: { [tag: string]: number } = {};
  for (const person of filteredPeople) {
    for (const tag of person.tags || []) {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    }
  }

  function handleClick(tag: string) {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  }

  return (
    <main className="flex flex-col items-center gap-4">
      <p className="flex max-w-7xl flex-wrap justify-center gap-2 p-2">
        {Object.keys(tagCount)
          .sort()
          .map((tag) => (
            <button
              key={tag}
              onClick={() => handleClick(tag)}
              className="cursor-pointer"
            >
              <span className="inline-block rounded-l-xl bg-sky-100 px-3 py-1">
                {tag}
              </span>
              <span className="inline-block rounded-r-xl bg-sky-600 px-3 py-1 text-white">
                {tagCount[tag]}
              </span>
            </button>
          ))}
      </p>
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {filteredPeople.map((person) => {
          return (
            <div key={person.name} className="flex flex-col items-center">
              <img
                src={`/people/${person.photo || "default.png"}`}
                className="mb-1 h-50 w-50 rounded-full object-cover"
              />
              <p>{person.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
