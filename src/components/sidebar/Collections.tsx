const Collections = ({ setCurrentSection, placeholders }: any) => {
  return (
    <ul className="p-2.5 space-y-8 pt-5">
      {placeholders?.collections.map((collection: any, i: number) => {
        return (
          <li key={`${i}`} className="">
            <details open className="space-y-2">
              <summary className="font-medium bg-zinc-100">
                {collection.title}
              </summary>

              <ul className="space-y-1">
                {collection.sections.map((section: any, l: any) => {
                  return (
                    <li
                      onClick={() => setCurrentSection(section)}
                      key={`${i}-${l}`}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-2 py-1 px-2 bg-pink-100">
                        <span>X</span>
                        <p>{section.title}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
        );
      })}
      {/* {Array.from({ length: 30 }, (_, i) => {
        return (
          <details
            className="flex items-center gap-2 py-1 px-2 bg-pink-100"
            key={i}
          >
            <summary>testing</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              aperiam.
            </p>
          </details>
        );
      })} */}
    </ul>
  );
};

export default Collections;
