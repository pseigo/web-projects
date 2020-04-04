defmodule ChatElixirCastsWeb.WaterCoolerChannel do
  require Logger
  use ChatElixirCastsWeb, :channel
  alias ChatElixirCasts.Chats

  def join("water_cooler:lobby", payload, socket) do
    if authorized?(payload) do
      {:ok, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (water_cooler:lobby).
  def handle_in("shout", payload, socket) do
    Chats.create_message(payload)
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(payload) do
    Logger.debug("Authorizing a water cooler join (payload = #{inspect(payload)})")
    true
  end
end
