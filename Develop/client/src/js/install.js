const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  event.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = event;
  // Update UI notify the user they can install the PWA
  showInstallButton();
});

// TODO: Implement a click event handler on the `butInstall` element

butInstall.addEventListener("click", async () => {
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === "accepted") {
    console.log("User accepted the install prompt");
  } else {
    console.log("User dismissed the install prompt");
  }
  // Clear the deferred prompt
  deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event

window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed successfully");
});
