export interface Task {
  id?: number | null,
  project_id?: number | null,
  name?: string | null,
  start_at?: any,
  end_at?: any,
  board?: number | null,
  disabled?: boolean | null
}
