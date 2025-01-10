import prisma from '@/prisma/client'
import IssueSummary from './IssueSummary'
import LatestIssues from './LatestIssues'
import IssueChart from './issueChart'


export default async function Home({ searchParams } : { searchParams: { page: string }}) {

  const open = await prisma.issue.count({where: {status: 'OPEN'}})
  const inProgress = await prisma.issue.count({where: {status: 'IN_PROGRESS'}})
  const closed = await prisma.issue.count({where: {status: 'CLOSED'}})

  return (
  //<LatestIssues/>
  //<IssueSummary open={open} inProgress={inProgress} closed={closed} />
  <IssueChart open={open} inProgress={inProgress} closed={closed} />
  )
}
