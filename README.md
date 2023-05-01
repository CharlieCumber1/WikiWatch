# WikiWatch

An application to visualise recent edits made to Wikipedia pages.

## System Requirements

This project uses poetry for Python to create an isolated environment and manage package dependencies. It also uses
docker for running the local database.
- [Python 3.10](https://www.python.org/)
- [Poetry](https://python-poetry.org/docs/)
- [Docker](https://docs.docker.com/desktop/install/windows-install/)

### Dependencies

The project uses a virtual environment to isolate package dependencies. To create the virtual environment and install 
required packages, run the following from your preferred shell:

```bash
poetry install
```

### Local environment variables

You'll also need to clone a new `.env` file from the `.env.template` to store local configuration options. This is a
one-time operation on first setup:

```bash
$ cp .env.template .env
```

### Local database

To run the local database use docker, running the following start command:

```bash
docker-compose -f .\docker-compose-database.yml up
```

To initialise the database tables run:

```bash
poetry run flask db upgrade
```

## Running locally

### Backend

Once the all dependencies have been installed, start the Flask app in development mode within the Poetry environment by
running the following from the project root:

```bash
$ poetry run flask run
```

