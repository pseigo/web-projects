defmodule PhoenixReactBoilerplateWeb.PageController do
  use PhoenixReactBoilerplateWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
