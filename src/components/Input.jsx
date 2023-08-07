function Input() {
  return (
    <div className="w-full bg-dark1 p-4 rounded-lg">
      <div class="flex gap-5 rounded-lg">
        <input
          type="text"
          placeholder="Type your message..."
          class="w-full py-3 px-6 focus:outline-none rounded-full bg-dark2 text-white"
        />
        <button
          type="button"
          class="bg-darkpink hover:bg-darkpink text-white py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
}
export default Input;
