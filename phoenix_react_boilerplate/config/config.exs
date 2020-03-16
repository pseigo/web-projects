# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :phoenix_react_boilerplate,
  ecto_repos: [PhoenixReactBoilerplate.Repo]

# Configures the endpoint
config :phoenix_react_boilerplate, PhoenixReactBoilerplateWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "udsLSqQgBQXD4qOJNZ465GyPiex+yXOnYM2Ce73J4vN/BA72aLKcuQ7bVM0UiiHf",
  render_errors: [view: PhoenixReactBoilerplateWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: PhoenixReactBoilerplate.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
