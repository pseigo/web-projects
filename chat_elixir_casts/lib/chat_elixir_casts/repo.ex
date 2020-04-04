defmodule ChatElixirCasts.Repo do
  use Ecto.Repo,
    otp_app: :chat_elixir_casts,
    adapter: Ecto.Adapters.Postgres
end
