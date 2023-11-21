"use client";

export const Navigation = () => {
  return (
    <>
      <aside className="group/sidebar bg-secondary h-full overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div>
          <p>Action Items</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div className="opacity-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
      </aside>
    </>
  );
};