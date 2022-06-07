#
# Copyright (c) 2021 Airbyte, Inc., all rights reserved.
#


from typing import Any, List, Mapping, Tuple

from airbyte_cdk.models import SyncMode
from airbyte_cdk.sources import AbstractSource
from airbyte_cdk.sources.streams import Stream
from airbyte_cdk.sources.streams.http.auth import TokenAuthenticator

from .streams import (
    Blocks,
    Bounces,
    Campaigns,
    Contacts,
    GlobalSuppressions,
    InvalidEmails,
    Lists,
    Messages,
    MessagesDetails,
    Scopes,
    Segments,
    SingleSends,
    SpamReports,
    StatsAutomations,
    SuppressionGroupMembers,
    SuppressionGroups,
    TemplateDetails,
    Templates,
)


class SourceSendgrid(AbstractSource):
    def check_connection(self, logger, config) -> Tuple[bool, any]:
        try:
            authenticator = TokenAuthenticator(config["apikey"])
            scopes_gen = Scopes(authenticator=authenticator).read_records(sync_mode=SyncMode.full_refresh)
            next(scopes_gen)
            return True, None
        except Exception as error:
            return False, f"Unable to connect to Sendgrid API with the provided credentials - {error}"

    def streams(self, config: Mapping[str, Any]) -> List[Stream]:
        authenticator = TokenAuthenticator(config["apikey"])

        messages = Messages(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"])
        templates = Templates(authenticator=authenticator)
        streams = [
            Lists(authenticator=authenticator),
            Campaigns(authenticator=authenticator),
            Contacts(authenticator=authenticator),
            StatsAutomations(authenticator=authenticator),
            Segments(authenticator=authenticator),
            SingleSends(authenticator=authenticator),
            templates,
            messages,
            MessagesDetails(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"], parent=messages),
            TemplateDetails(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"], parent=templates),
            GlobalSuppressions(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"]),
            SuppressionGroups(authenticator=authenticator),
            SuppressionGroupMembers(authenticator=authenticator),
            Blocks(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"]),
            Bounces(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"]),
            InvalidEmails(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"]),
            SpamReports(authenticator=authenticator, start_time=config["start_time"], end_time=config["end_time"]),
        ]

        return streams
