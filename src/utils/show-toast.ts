export function showToast({ content }: { content: string }) {
  if (window !== undefined) {
    const toast = document.getElementById("toast");
    // update data-toast-content
    toast?.querySelector("span")?.setAttribute("data-toast-content", content);
    toast?.classList.remove("hidden");
    setTimeout(() => {
      toast?.classList.add("hidden");
    }, 6000);
  }
}
