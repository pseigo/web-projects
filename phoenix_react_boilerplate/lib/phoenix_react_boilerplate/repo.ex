defmodule PhoenixReactBoilerplate.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_react_boilerplate,
    adapter: Ecto.Adapters.Postgres
end
