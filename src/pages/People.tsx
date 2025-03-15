import { useState } from "react";
import { people } from "../code/people";

export function People() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  let filteredPeople = [];
  for (const person of people) {
    if (
      selectedTags.length === 0 ||
      selectedTags.every((tag) => person.tags?.includes(tag))
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
    <main className="flex flex-col items-center gap-2">
      <div className="flex max-w-7xl flex-wrap justify-center gap-2 p-2">
        {Object.keys(tagCount)
          .sort()
          .map((tag) => (
            <button
              key={tag}
              onClick={() => handleClick(tag)}
              className="cursor-pointer"
            >
              <span
                className={`inline-block rounded-l-xl px-3 py-1 ${selectedTags.includes(tag) ? "bg-sky-700 text-white" : "bg-sky-200"}`}
              >
                {tag}
              </span>
              <span className="inline-block rounded-r-xl bg-gray-200 px-3 py-1">
                {tagCount[tag]}
              </span>
            </button>
          ))}
      </div>
      {selectedTags.length > 0 && (
        <button
          onClick={() => setSelectedTags([])}
          className="flex cursor-pointer items-center gap-1 rounded-xl bg-gray-100 px-3 py-1"
        >
          <span>Clear Selection</span>
          <span className="material-symbols-outlined">close</span>
        </button>
      )}
      <div className="flex flex-wrap justify-center gap-4 p-2">
        {filteredPeople.map((person) => {
          return (
            <div key={person.name} className="flex flex-col items-center">
              <img
                src={`/people/${person.photo || "default.png"}`}
                className="mb-1 h-30 w-30 rounded-full object-cover"
              />
              <p>{person.name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
