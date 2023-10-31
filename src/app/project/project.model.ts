import { Account } from "../account/account.model";

export interface Project {
  id?: number | null,
  name?: string | null,
  description?: string | null,
  url_homologation?: string | null,
  url_production?: string | null,
  url_git?: string | null,
  logo?: string | null,
}
