defmodule ChatElixirCastsWeb.PageController do
  use ChatElixirCastsWeb, :controller

  alias ChatElixirCasts.Chats

  def index(conn, _params) do
    messages = Chats.list_messages()
    render(conn, "index.html", %{messages: messages})
  end
end
