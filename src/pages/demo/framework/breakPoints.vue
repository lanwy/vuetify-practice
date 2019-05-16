<!-- 
Material Design Viewport Breakpoints
phone_iphoneExtra small	        xs	small to large handset	            s< 600px
tabletSmall	                    sm	small to medium tablet	            600px < s< 960px
laptopMedium	                md	large tablet to laptop	            960px < s< 1264px*
desktop_windowsLarge	        lg	desktop	                            1264px <s< 1904px*
tvExtra large	                xl	4k and ultra-wides	                s> 1904px*
-->

<template>
    <div>
        All breakpoint props:

        {
        xs: boolean
        xsOnly: boolean
        sm: boolean
        smOnly: boolean
        smAndDown: boolean
        smAndUp: boolean
        md: boolean
        mdOnly: boolean
        mdAndDown: boolean
        mdAndUp: boolean
        lg: boolean
        lgOnly: boolean
        lgAndDown: boolean
        lgAndUp: boolean
        xl: boolean
        xlOnly: boolean
        name: ('xs' | 'sm' | 'md' | 'lg' | 'xl')
        width: number
        height: number
        thresholds: { xs: number, sm: number, md: number, lg: number }
        scrollbarWidth: number
        }
    </div>
</template>
