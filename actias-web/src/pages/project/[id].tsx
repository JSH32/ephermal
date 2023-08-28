import { AclListDto, ProjectDto } from '@/client';
import { withAuthentication } from '@/helpers/authenticated';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api, { showError } from '@/helpers/api';
import { Breadcrumbs, Loader } from '@mantine/core';
import { breadcrumbs } from '@/helpers/util';
import AccessControl from '@/components/AccessControl';
import ScriptsControl from '@/components/ScriptsControl';

const Project = () => {
  const router = useRouter();

  const [project, setProject] = useState<ProjectDto | null>(null);
  const [permissions, setPermissions] = useState<AclListDto | null>(null);

  useEffect(() => {
    api.project
      .getProject(router.query.id as string)
      .then((project) => {
        setProject(project);
        api.acl.getAclMe(project.id).then(setPermissions);
      })
      .catch(showError);
  }, [router]);

  return project ? (
    <>
      <Breadcrumbs>
        {breadcrumbs([
          { title: 'Home', href: '/user' },
          { title: project?.name, href: `/project/${project?.id}` },
        ])}
      </Breadcrumbs>

      {permissions?.permissions['SCRIPT_READ'] && (
        <ScriptsControl
          project={project}
          write={permissions?.permissions['SCRIPT_WRITE']}
        />
      )}

      {permissions?.permissions['PERMISSIONS_READ'] && (
        <AccessControl
          project={project}
          write={permissions?.permissions['PERMISSIONS_WRITE']}
        />
      )}
    </>
  ) : (
    <Loader />
  );
};

export default withAuthentication(Project);
