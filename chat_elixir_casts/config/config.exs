# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :chat_elixir_casts,
  ecto_repos: [ChatElixirCasts.Repo]

# Configures the endpoint
config :chat_elixir_casts, ChatElixirCastsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "O5RLzN5gxneSvQwKNH3qQJj20nYIFnqoU3mSf4/hfwZcflAB6l6VZHwES96eWhg8",
  render_errors: [view: ChatElixirCastsWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ChatElixirCasts.PubSub, adapter: Phoenix.PubSub.PG2],
  live_view: [signing_salt: "MBdhMz+a"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
