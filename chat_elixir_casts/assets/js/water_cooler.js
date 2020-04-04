"use strict"

import { Socket } from "phoenix";

let WaterCooler = {
  init(socket) {
    let channel = socket.channel("water_cooler:lobby", {});
    channel.join()
      .receive("ok", resp => { console.log("Joined successfully", resp) })
      .receive("error", resp => { console.log("Unable to join", resp) });

    this.submitMessageHandler(channel);
  },

  submitMessageHandler(channel) {
    let chatForm = document.getElementById("chat-form").addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.getElementById("user-name").value;
      let msgField = document.getElementById("user-msg");
      const msg = msgField.value;

      let showError = (err) => {
        let errText = document.getElementById("message-error");
        errText.textContent = err;
        errText.style.display = "block";
      };

      let hideError = () => {
        let errText = document.getElementById("message-error");
        errText.textContent = "";
        errText.style.display = "none";
      };

      let err = "";
      if (name.length == 0) { err += "You must set a username. "; }
      if (msg.length == 0)  { err += "Messages cannot be empty. "; }

      if (err.length == 0) {
        channel.push("shout", {name: name, body: msg});
        hideError();
      } else {
        showError(err);
      }

      msgField.value = "";
    });

    channel.on("shout", (payload) => {
      let msgBlockName = document.createElement("b");
      msgBlockName.insertAdjacentText("afterbegin", payload.name)

      let msgBlock = document.createElement("p");
      msgBlock.appendChild(msgBlockName);
      msgBlock.insertAdjacentText("beforeend", `: ${payload.body}`);

      let chatBox = document.querySelector("#chat-box");
      chatBox.appendChild(msgBlock);
    });
  }
}

export default WaterCooler;
