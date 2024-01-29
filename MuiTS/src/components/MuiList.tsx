import MailIcon from '@mui/icons-material/Mail'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function MuiList() {
  return (
    <>
        <Box sx={{width:'400px',bgcolor:'#efefef'}}>
            <List>
                <ListItem>
                    <ListItemText primary='List Item 1' />
                </ListItem>
                <ListItem>
                    <ListItemText primary='List Item 2' />
                </ListItem>
                <ListItem>
                    <ListItemText primary='List Item 3' />
                </ListItem>
            </List>
        </Box>

        <Box sx={{width:'400px',bgcolor:'#efefef'}}>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 1' secondary='Secondary Text' />
                </ListItem>
                
            </List>
        </Box>

        <Box sx={{width:'400px',bgcolor:'#efefef'}}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 1' secondary='Secondary Text' />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 1' secondary='Secondary Text' />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon/>
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='List Item 1' secondary='Secondary Text' />
                    </ListItemButton>
                </ListItem>
                
            </List>
        </Box>
    </>
  )
}
