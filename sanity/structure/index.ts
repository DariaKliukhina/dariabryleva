import { CogIcon, TagIcon, CodeIcon, HomeIcon, CaseIcon } from "@sanity/icons";
import { StructureResolver } from "sanity/desk";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Main Page")
        .id("homepage-list")
        .child(
          S.document()
            .schemaType("homepage")
            .documentId("homepage")
            .title("Homepage")
        ),
      S.listItem()
        .title("Experience")
        .id("experience-list")
        .child(
          S.document()
            .schemaType("experience")
            .documentId("experience")
            .title("Experience")
        ),
      S.listItem()
        .title("About")
        .id("about-list")
        .child(
          S.document().schemaType("about").documentId("about").title("About")
        ),

      S.divider(),
      S.documentTypeListItem("position").title("Position").icon(CaseIcon),
      S.documentTypeListItem("company").title("Company").icon(HomeIcon),
      S.documentTypeListItem("technology").title("Technologies").icon(CodeIcon),

      S.divider(),

      S.documentListItem()
        .schemaType("siteSettings")
        .icon(CogIcon)
        .title("Site Settings"),
    ]);
