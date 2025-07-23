import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material"

function SortControls({ sortBy, setSortBy, order, setOrder }) {
    return (
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <FormControl size="small">
                <InputLabel>Sort by</InputLabel>
                <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    label="Sort by">
                    <MenuItem value="created_at">Date</MenuItem>
                    <MenuItem value="votes">Votes</MenuItem>
                    <MenuItem value="comment_count">Comment Count</MenuItem>
                </Select>
            </FormControl>

            <FormControl size="small">
                <InputLabel>Order</InputLabel>
                <Select
                    value={order}
                    onChange={(e) => setOrder(e.target.value)}
                    label="Order">
                    <MenuItem value="DESC">Descending</MenuItem>
                    <MenuItem value="ASC">Ascending</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default SortControls